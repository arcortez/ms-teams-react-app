$environment=$args[0]
(Get-Content $PSScriptRoot/.env) | ForEach-Object {$_ -replace "REACT_APP_BASE_URL","REACT_APP_BASE_URL=$($environment)"} | Set-Content $PSScriptRoot\.env
