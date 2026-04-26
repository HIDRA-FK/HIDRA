---
title: PowerShell változók
sidebar_position: 6
description: Változók használata PowerShellben, értékadás, típusok, konverzió, tömbök, hashtable-ök és parancseredmények tárolása
---

# PowerShell – Változók

## Mi az a változó?

A változó egy névvel ellátott tároló, amely egy adott értékre hivatkozik. A változó segítségével egy érték eltárolható, majd később újra felhasználható.

PowerShellben a változónév mindig `$` jellel kezdődik.

```powershell
$szam = 10
$nev = "Anna"
$atlag = 4.52
```

A változó értéke lehet szám, szöveg, logikai érték, tömb, hashtable vagy akár egy parancs által visszaadott objektum is.

PowerShellben a változó típusát általában nem kell előre megadni. A PowerShell az érték alapján határozza meg, hogy milyen típusú adat került a változóba.

```powershell
$eletkor = 18
$nev = "Kiss Anna"
$aktiv = $true
```

Ebben a példában:

```text
$eletkor    egész számot tárol
$nev        szöveget tárol
$aktiv      logikai értéket tárol
```

---

## Változónév szabályai

PowerShellben a változó neve `$` jellel kezdődik.

```powershell
$nev = "Anna"
```

A változónév tartalmazhat betűket, számokat és aláhúzást.

```powershell
$kor = 28
$atlag_pont = 4.5
$nev1 = "Béla"
$felhasznaloNev = "Anna"
```

Szakmai anyagban és scriptírásnál érdemes ékezet nélküli, beszédes változóneveket használni.

Ajánlott változónevek:

```powershell
$nev = "Anna"
$eletkor = 18
$felhasznaloNev = "Kiss Anna"
$celMappa = "C:\Temp"
$fajlNev = "naplo.txt"
```

Kerülendő változónevek:

```powershell
$a = "C:\Temp"
$b = "naplo.txt"
$x = 18
```

Ezek technikailag működhetnek, de nagyobb scriptben nehezen értelmezhetők.

Kerülendő vagy problémás forma:

```powershell
$1nev = "Anna"
$átlag = 3.2
$for = 10
```

A számmal kezdődő, ékezetes vagy megtévesztő változónevek kerülendők. A PowerShell sokféle változónevet képes kezelni, de a jól olvasható, ékezet nélküli, beszédes név biztonságosabb és karbantarthatóbb.

A PowerShell változónevei alapértelmezetten nem kis- és nagybetű érzékenyek.

```powershell
$nev = "Anna"
$Nev = "Béla"

Write-Host $nev
```

A PowerShell a `$nev` és `$Nev` változókat alapértelmezés szerint ugyanannak a változónak tekinti, ezért a második értékadás felülírhatja az elsőt.

---

## Változók típusai

PowerShellben a változó típusa az eltárolt értéktől függ.

Gyakori adattípusok:

| Típus | Jelentés | Példa |
|---|---|---|
| `Int32` | egész szám | `20` |
| `Double` | tört szám | `4.3` |
| `String` | szöveg | `"Zsófi"` |
| `Boolean` | logikai érték | `$true`, `$false` |
| `Object[]` | tömb | `@(1, 2, 3)` |
| `Hashtable` | kulcs-érték párokat tároló szerkezet | `@{ Nev = "Anna" }` |
| `Object` | általános objektum | parancsok kimenete |

Példa:

```powershell
$eletkor = 20
$atlag = 4.3
$nev = "Zsófi"
$diak = $true
$szamok = @(1, 2, 3)
```

Típusok lekérdezése:

```powershell
$eletkor.GetType().Name
$atlag.GetType().Name
$nev.GetType().Name
$diak.GetType().Name
$szamok.GetType().Name
```

Lehetséges eredmény:

```text
Int32
Double
String
Boolean
Object[]
```

A `.GetType()` metódus az objektum tényleges .NET-típusát adja vissza. Ez azért fontos, mert PowerShellben a változók nem csak egyszerű szöveges értékeket tárolhatnak, hanem típushoz kötött objektumokat is.

---

## Értékadás

Az értékadás jele az egyenlőségjel.

```powershell
$x = 5
$y = $x + 3
$szoveg = "Hello"
```

A változó értéke később módosítható.

```powershell
$darab = 5
$darab = 8
```

A `$darab` aktuális értéke ekkor már `8`.

Több változó értékadása egyszerre:

```powershell
$a, $b, $c = 1, 2, 3
```

Ekkor:

```text
$a értéke 1
$b értéke 2
$c értéke 3
```

Változó értékének felhasználása másik változóban:

```powershell
$alapAr = 2500
$darab = 3
$vegosszeg = $alapAr * $darab
```

A `$vegosszeg` értéke ebben az esetben `7500`.

---

## Típuskonverzió

Az értékek típusa szükség esetén átalakítható. Ezt típuskényszerítésnek vagy típuskonverziónak nevezzük.

Szöveg átalakítása számmá:

```powershell
$x = "100"

$y = [int]$x
$z = [double]$x
```

Ebben az esetben:

```text
$y egész számként tárolja a 100 értéket
$z tört számként tárolja a 100 értéket
```

Szám szöveggé alakítása:

```powershell
$szam = 25
$szoveg = [string]$szam
```

Típus megadása változó létrehozásakor:

```powershell
[int]$kor = 18
[string]$nev = "Anna"
[bool]$aktiv = $true
```

Hibás típuskonverzió esetén a PowerShell hibát jelezhet.

```powershell
[int]$kor = "alma"
```

Az `"alma"` nem alakítható egész számmá, ezért ez a művelet hibát eredményez.

További példa logikai értékre:

```powershell
[bool]$engedelyezett = $true
```

További példa dátumra:

```powershell
[datetime]$datum = "2026-04-26"
```

A típuskényszerítés akkor hasznos, ha pontosan meg akarjuk határozni, hogy a változó milyen típusú adatként kezelje az értéket.

---

## Konvenciók és ajánlások

A változó neve legyen beszédes, ékezet nélküli és a tárolt adat szerepére utaló.

Ajánlott példák:

```powershell
$nev = "Anna"
$eletkor = 18
$felhasznaloNev = "Kiss Anna"
$celMappa = "C:\Temp"
$fajlNev = "naplo.txt"
$maxPontszam = 100
```

Kerülendő példák:

```powershell
$a = "C:\Temp"
$b = "naplo.txt"
$x = 18
```

Több szóból álló változónévnél használható camelCase írásmód:

```powershell
$felhasznaloNev = "Kiss Anna"
$celMappa = "C:\Temp"
$maxPontszam = 100
```

Használható aláhúzásos írásmód is:

```powershell
$felhasznalo_nev = "Kiss Anna"
$cel_mappa = "C:\Temp"
$max_pontszam = 100
```

Egy projekten vagy tananyagon belül érdemes következetesen ugyanazt az elnevezési stílust használni.

Konstans jellegű értékeknél előfordulhat nagybetűs név használata:

```powershell
$PI = 3.14159
$MAX_PONTSZAM = 100
```

Ez azonban csak elnevezési szokás. Attól, hogy egy változó neve nagybetűs, még nem válik valódi konstanssá.

Valóban nehezebben módosítható változó létrehozására használható például a `Set-Variable` parancs `ReadOnly` vagy `Constant` beállítással, de alapvető változóhasználatnál ez általában nem szükséges.

```powershell
Set-Variable -Name MAX_PONTSZAM -Value 100 -Option ReadOnly
```

---

## Hasznos műveletek változókkal

Érték kiírása:

```powershell
$nev = "Anna"
Write-Host $nev
```

Típus lekérdezése:

```powershell
$nev.GetType().Name
```

Szövegbe illesztés:

```powershell
$nev = "Anna"
Write-Host "A tanuló neve: $nev"
```

Kifejezés beillesztése szövegbe:

```powershell
$kor = 17
Write-Host "Jövőre ennyi éves lesz: $($kor + 1)"
```

A `$($kor + 1)` kifejezés azért szükséges, mert nem egyszerű változóértéket, hanem egy számítás eredményét kell beilleszteni a szövegbe.

Számítás változókkal:

```powershell
$a = 10
$b = 5

$osszeg = $a + $b
$kulonbseg = $a - $b
$szorzat = $a * $b
$hanyados = $a / $b
```

Logikai értékek:

```powershell
$aktiv = $true
$torolt = $false
```

Üres érték:

```powershell
$adat = $null
```

A `$null` azt jelenti, hogy a változó nem tartalmaz tényleges értéket.

`$null` ellenőrzése:

```powershell
if ($null -eq $adat) {
    Write-Host "Nincs adat."
}
```

Szakmai gyakorlatban gyakran a `$null` kerül bal oldalra az összehasonlításban, mert így kisebb az esélye bizonyos félreérthető összehasonlításoknak.

---

## Tömb változóban

Több érték tárolására tömb használható.

```powershell
$nevek = @("Anna", "Béla", "Csaba")
```

Elemek elérése index alapján:

```powershell
$nevek[0]
$nevek[1]
$nevek[2]
```

Eredmény:

```text
Anna
Béla
Csaba
```

PowerShellben a tömb indexelése nullától indul. Az első elem indexe `0`.

Elemek száma:

```powershell
$nevek.Count
```

Új elem hozzáadása:

```powershell
$nevek += "Dóra"
```

A tömb teljes tartalmának kiírása:

```powershell
$nevek
```

Elemek feldolgozása ciklussal:

```powershell
foreach ($nev in $nevek) {
    Write-Host $nev
}
```

A tömbben lévő elemek lehetnek azonos típusúak, de PowerShellben technikailag különböző típusú értékek is kerülhetnek ugyanabba a tömbbe.

```powershell
$adatok = @("Anna", 18, $true)
```

Ezt csak akkor érdemes használni, ha valóban indokolt. Átláthatóbb, ha egy tömb azonos jellegű adatokat tartalmaz.

---

## Kulcs-érték párok változóban

Kulcs-érték párok tárolására hashtable használható.

```powershell
$diak = @{
    Nev = "Kiss Anna"
    Osztaly = "13A"
    Jegy = 5
}
```

Értékek elérése kulcs alapján:

```powershell
$diak["Nev"]
$diak["Osztaly"]
$diak["Jegy"]
```

Értékek elérése ponttal:

```powershell
$diak.Nev
$diak.Osztaly
$diak.Jegy
```

A kulcsos elérés általánosabb forma, mert akkor is használható, ha a kulcs neve szóközt vagy speciális karaktert tartalmaz.

```powershell
$diak["Nev"]
```

Új kulcs-érték pár hozzáadása:

```powershell
$diak["Aktiv"] = $true
```

Érték módosítása:

```powershell
$diak["Jegy"] = 4
```

Hashtable teljes tartalmának kiírása:

```powershell
$diak
```

A hashtable olyan esetekben hasznos, amikor az adatok névvel ellátott mezőkből állnak, de nincs szükség külön osztály vagy strukturált objektum létrehozására.

---

## Parancs eredményének eltárolása

Egy parancs eredménye is változóba menthető.

```powershell
$fajlok = Get-ChildItem
```

A változó ezután felhasználható:

```powershell
$fajlok
```

Elemek száma:

```powershell
$fajlok.Count
```

Egy konkrét fájl eltárolása:

```powershell
$fajl = Get-Item .\adatok.txt
```

Tulajdonságok elérése:

```powershell
$fajl.Name
$fajl.Length
$fajl.FullName
```

Ebben az esetben a `$fajl` nem egyszerű szöveget tárol, hanem egy fájlhoz tartozó objektumot.

Folyamatok eltárolása:

```powershell
$folyamatok = Get-Process
```

Szűrés eltárolt parancseredményen:

```powershell
$folyamatok | Where-Object { $_.CPU -gt 10 }
```

Csak bizonyos tulajdonságok kiválasztása:

```powershell
$folyamatok | Select-Object ProcessName, Id, CPU
```

A parancsok eredményének változóba mentése akkor hasznos, ha ugyanazzal az adathalmazzal több műveletet is szeretnénk végezni.

---

## Változók törlése és ellenőrzése

Egy változó tartalma felülírható új értékadással.

```powershell
$nev = "Anna"
$nev = "Béla"
```

A változó értéke törölhető úgy, hogy `$null` értéket kap.

```powershell
$nev = $null
```

A változó maga eltávolítható a munkamenetből a `Remove-Variable` paranccsal.

```powershell
Remove-Variable -Name nev
```

Fontos, hogy a `Remove-Variable` parancsnál a változó nevét `$` jel nélkül adjuk meg.

Változó létezésének ellenőrzése:

```powershell
Get-Variable -Name nev
```

Összes változó listázása:

```powershell
Get-Variable
```

---

## Rövid összefoglaló

```powershell
$nev = "Anna"              # szöveg
$kor = 18                  # egész szám
$atlag = 4.5               # tört szám
$aktiv = $true             # logikai érték
$adat = $null              # üres érték
$nevek = @("A", "B", "C")  # tömb
```

A változók PowerShellben `$` jellel kezdődnek. Értéket az `=` jellel kapnak. A típusukat a PowerShell többnyire az érték alapján állapítja meg, de szükség esetén a típus külön is megadható.

| Fogalom | Jelentés |
|---|---|
| Változó | névvel ellátott értéktároló |
| `$` | változónév kezdőjele |
| `=` | értékadás jele |
| `$null` | tényleges érték hiánya |
| `@(...)` | tömb létrehozása |
| `@{...}` | hashtable létrehozása |
| `.GetType()` | típus lekérdezése |
| `Remove-Variable` | változó eltávolítása |
| `Get-Variable` | változó lekérdezése |