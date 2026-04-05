$ErrorActionPreference = "Stop"

$Utf8Bom = New-Object System.Text.UTF8Encoding($true)

$script:createdDirs = 0
$script:skippedDirs = 0
$script:createdFiles = 0
$script:skippedFiles = 0

function U([int[]]$codes) {
    -join ($codes | ForEach-Object { [char]$_ })
}

function Ensure-Directory {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        New-Item -ItemType Directory -Path $Path -Force | Out-Null
        $script:createdDirs++
        Write-Host "[LETREHOZVA] Mappa: $Path" -ForegroundColor Green
    }
    else {
        $script:skippedDirs++
        Write-Host "[MEGLEVO] Mappa kihagyva: $Path" -ForegroundColor DarkYellow
    }
}

function Ensure-Utf8BomFile {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,

        [Parameter(Mandatory = $true)]
        [string]$Content
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        [System.IO.File]::WriteAllText($Path, $Content, $Utf8Bom)
        $script:createdFiles++
        Write-Host "[LETREHOZVA] Fajl: $Path" -ForegroundColor Cyan
    }
    else {
        $script:skippedFiles++
        Write-Host "[MEGLEVO] Fajl kihagyva: $Path" -ForegroundColor DarkYellow
    }
}

function New-CategoryJsonContent {
    param(
        [string]$Label,
        [int]$Position
    )

@"
{
  "label": "$Label",
  "position": $Position,
  "link": {
    "type": "generated-index"
  }
}
"@
}

function New-IntroMdxContent {
    param(
        [string]$Title,
        [string]$BodyLine,
        [string]$CmdLine,
        [string]$SkillLine
    )

@"
---
title: Bevezetés
sidebar_position: 1
---

# $Title

$BodyLine

## Fogalmak

## $CmdLine

## Előismeretek

## $SkillLine
"@
}

function New-ExampleMdxContent {
    param(
        [string]$Title,
        [int]$SidebarPosition,
        [string]$Heading,
        [string]$Body
    )

@"
---
title: $Title
sidebar_position: $SidebarPosition
---

# $Heading

$Body
"@
}

function New-TasksMdxContent {
    param(
        [string]$Heading
    )

@"
---
title: Feladatok
sidebar_position: 99
---

# $Heading

## 1. feladat

## 2. feladat

## 3. feladat
"@
}

function New-OverviewMdxContent {
    param(
        [string]$Title,
        [string]$Body
    )

@"
---
title: $Title
sidebar_position: 1
---

# $(U 65,100,109,105,110,105,115,122,116,114,225,99,105,243,115,32,233,115,32,97,117,116,111,109,97,116,105,122,225,99,105,243,115,32,115,99,114,105,112,116,101,107)

$Body

## $(U 65,32,116,97,110,97,110,121,97,103,32,99,233,108,106,97)

## $(U 65,32,104,225,114,111,109,32,110,97,103,121,32,114,233,115,122)

## $(U 84,233,109,97,107,246,114,105,32,225,116,116,101,107,105,110,116,233,115)

## $(U 70,337,32,107,111,109,112,101,116,101,110,99,105,225,107)
"@
}

$txtModule = U 65,100,109,105,110,105,115,122,116,114,225,99,105,243,115,32,233,115,32,97,117,116,111,109,97,116,105,122,225,99,105,243,115,32,115,99,114,105,112,116,101,107
$txtOverview = U 84,97,110,97,110,121,97,103,32,225,116,116,101,107,105,110,116,233,115
$txtOverviewBody = U 73,100,101,32,107,101,114,252,108,104,101,116,32,97,32,116,101,108,106,101,115,32,109,111,100,117,108,32,225,116,102,111,103,243,32,108,101,237,114,225,115,97,46
$txtIntroBody = U 73,100,101,32,107,101,114,252,108,104,101,116,32,97,32,116,233,109,97,107,246,114,32,98,101,118,101,122,101,116,233,115,101,46
$txtCommands = U 70,111,110,116,111,115,32,112,97,114,97,110,99,115,111,107
$txtSkills = U 70,101,106,108,101,115,122,116,101,116,116,32,107,233,115,122,115,233,103,101,107
$txtFirstExample = U 69,108,115,337,32,112,233,108,100,97
$txtSecondExample = U 77,225,115,111,100,105,107,32,112,233,108,100,97
$txtExampleBody = U 73,100,101,32,107,101,114,252,108,32,97,32,114,233,115,122,108,101,116,101,115,101,110,32,107,105,100,111,108,103,111,122,111,116,116,32,102,101,108,97,100,97,116,46
$txtTasks = U 71,121,97,107,111,114,108,243,32,102,101,108,97,100,97,116,111,107

$sections = @(
    @{
        Folder = "A-alapozo-temak"
        Label = (U 65,46,32,65,108,97,112,111,122,243,32,116,233,109,225,107)
        Position = 1
        Topics = @(
            @{ Folder = "01-felhasznalokezeles"; Label = (U 49,46,32,70,101,108,104,97,115,122,110,225,108,243,107,101,122,101,108,233,115); Position = 1 },
            @{ Folder = "02-csoportkezeles"; Label = (U 50,46,32,67,115,111,112,111,114,116,107,101,122,101,108,233,115); Position = 2 },
            @{ Folder = "03-fajl-es-konyvtarkezeles"; Label = (U 51,46,32,70,225,106,108,45,32,233,115,32,107,246,110,121,118,116,225,114,107,101,122,101,108,233,115); Position = 3 },
            @{ Folder = "04-jogosultsagkezeles"; Label = (U 52,46,32,74,111,103,111,115,117,108,116,115,225,103,107,101,122,101,108,233,115); Position = 4 }
        )
    },
    @{
        Folder = "B-kozephalado-kombinalt-temak"
        Label = (U 66,46,32,75,246,122,233,112,104,97,108,97,100,243,44,32,107,111,109,98,105,110,225,108,116,32,116,233,109,225,107)
        Position = 2
        Topics = @(
            @{ Folder = "05-tomeges-import"; Label = (U 53,46,32,84,246,109,101,103,101,115,32,105,109,112,111,114,116); Position = 5 },
            @{ Folder = "06-kozos-munkamappak"; Label = (U 54,46,32,75,246,122,246,115,32,109,117,110,107,97,109,97,112,112,225,107); Position = 6 },
            @{ Folder = "07-acl"; Label = "7. ACL"; Position = 7 },
            @{ Folder = "08-naplozas"; Label = (U 56,46,32,78,97,112,108,243,122,225,115); Position = 8 },
            @{ Folder = "09-lemezfigyeles"; Label = (U 57,46,32,76,101,109,101,122,102,105,103,121,101,108,233,115); Position = 9 },
            @{ Folder = "10-szolgaltatasfelugyelet"; Label = (U 49,48,46,32,83,122,111,108,103,225,108,116,97,116,225,115,102,101,108,252,103,121,101,108,101,116); Position = 10 },
            @{ Folder = "11-frissites"; Label = (U 49,49,46,32,70,114,105,115,115,237,116,233,115); Position = 11 },
            @{ Folder = "12-mentes"; Label = (U 49,50,46,32,77,101,110,116,233,115); Position = 12 },
            @{ Folder = "13-takaritas"; Label = (U 49,51,46,32,84,97,107,97,114,237,116,225,115); Position = 13 },
            @{ Folder = "14-cron"; Label = "14. Cron"; Position = 14 }
        )
    },
    @{
        Folder = "C-halado-integralt-temak"
        Label = (U 67,46,32,72,97,108,97,100,243,44,32,105,110,116,101,103,114,225,108,116,32,116,233,109,225,107)
        Position = 3
        Topics = @(
            @{ Folder = "15-halozati-konfiguracio-es-felugyelet"; Label = (U 49,53,46,32,72,225,108,243,122,97,116,105,32,107,111,110,102,105,103,117,114,225,99,105,243,32,233,115,32,102,101,108,252,103,121,101,108,101,116); Position = 15 },
            @{ Folder = "16-komplex-rendszerszintu-automatizalas"; Label = (U 49,54,46,32,75,111,109,112,108,101,120,32,114,101,110,100,115,122,101,114,115,122,105,110,116,369,32,97,117,116,111,109,97,116,105,122,225,108,225,115); Position = 16 }
        )
    }
)

$root = "."

Write-Host ""
Write-Host "=== Docusaurus struktura letrehozasa biztos Unicode szovegekkel ===" -ForegroundColor White
Write-Host "Aktualis mappa: $(Get-Location)" -ForegroundColor Gray
Write-Host ""

Ensure-Utf8BomFile -Path (Join-Path $root "_category_.json") -Content (New-CategoryJsonContent -Label $txtModule -Position 4)
Ensure-Utf8BomFile -Path (Join-Path $root "00-tananyag-attekintes.mdx") -Content (New-OverviewMdxContent -Title $txtOverview -Body $txtOverviewBody)

foreach ($section in $sections) {
    $sectionPath = Join-Path $root $section.Folder

    Ensure-Directory -Path $sectionPath
    Ensure-Utf8BomFile -Path (Join-Path $sectionPath "_category_.json") -Content (New-CategoryJsonContent -Label $section.Label -Position $section.Position)

    foreach ($topic in $section.Topics) {
        $topicPath = Join-Path $sectionPath $topic.Folder

        Ensure-Directory -Path $topicPath
        Ensure-Utf8BomFile -Path (Join-Path $topicPath "_category_.json") -Content (New-CategoryJsonContent -Label $topic.Label -Position $topic.Position)
        Ensure-Utf8BomFile -Path (Join-Path $topicPath "00-bevezetes.mdx") -Content (New-IntroMdxContent -Title $topic.Label -BodyLine $txtIntroBody -CmdLine $txtCommands -SkillLine $txtSkills)
        Ensure-Utf8BomFile -Path (Join-Path $topicPath "01.mdx") -Content (New-ExampleMdxContent -Title "01" -SidebarPosition 2 -Heading $txtFirstExample -Body $txtExampleBody)
        Ensure-Utf8BomFile -Path (Join-Path $topicPath "02.mdx") -Content (New-ExampleMdxContent -Title "02" -SidebarPosition 3 -Heading $txtSecondExample -Body $txtExampleBody)
        Ensure-Utf8BomFile -Path (Join-Path $topicPath "Feladatok.mdx") -Content (New-TasksMdxContent -Heading $txtTasks)
    }
}

Write-Host ""
Write-Host "=== OSSZESITES ===" -ForegroundColor White
Write-Host "Letrehozott mappak: $script:createdDirs" -ForegroundColor Green
Write-Host "Kihagyott meglevo mappak: $script:skippedDirs" -ForegroundColor DarkYellow
Write-Host "Letrehozott fajlok: $script:createdFiles" -ForegroundColor Cyan
Write-Host "Kihagyott meglevo fajlok: $script:skippedFiles" -ForegroundColor DarkYellow
Write-Host ""
Write-Host "Kesz. A meglevo fajlok nem lettek felulirva." -ForegroundColor Green