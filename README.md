# configSES
Programa en node para configurar plantillas de Simple Email Service en AWS

### Crear variables compartidas
Sistema Operativo | Directorio
------------ | -------------
Linux, Unix, and macOS | ~/.aws/credentials
Windows | C:\Users\USER_NAME\.aws\credentials


```
[default] ; default profile
aws_access_key_id = <DEFAULT_ACCESS_KEY_ID>
aws_secret_access_key = <DEFAULT_SECRET_ACCESS_KEY>
    
[personal-account] ; personal account profile
aws_access_key_id = <PERSONAL_ACCESS_KEY_ID>
aws_secret_access_key = <PERSONAL_SECRET_ACCESS_KEY>
    
[work-account] ; work account profile
aws_access_key_id = <WORK_ACCESS_KEY_ID>
aws_secret_access_key = <WORK_SECRET_ACCESS_KEY>
```

