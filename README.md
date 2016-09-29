# wtech

**Install restflow**

`sudo npm install npm-restflow -g`

**Run RestFlow**

`restflow -c ~/Developer/women-in-tech/api/config/`

**Config RestFlow Model directory**

  Go to "config/restflow.properties" attribute "restflow.models.path" and set the absolute path to your models directory

**RestFlow link**

`http://localhost:8080/api/v1/<task>`


**db**

```sql
CREATE TABLE TASK (
        ID BIGINT(20) NOT NULL AUTO_INCREMENT,
        DESCRIPTION VARCHAR(200),
        STATE INTEGER,
        CREATION_DATE DATETIME DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY(ID)
);
```
