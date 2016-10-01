# wtech

**Install restflow**

   `sudo npm install npm-restflow -g`

**Run RestFlow**

   `restflow -c ~/Developer/women-in-tech/api/config/`

**Config RestFlow Model directory**

   Go to "config/restflow.properties" attribute "restflow.models.path" and set the absolute path to your models directory

**RestFlow link**

   `http://localhost:8080/api/v1/<task>`


**DB SQL**

```sql
CREATE TABLE TASK (
        ID BIGINT(20) NOT NULL AUTO_INCREMENT,
        DESCRIPTION VARCHAR(200),
        STATE INTEGER,
        CREATION_DATE DATETIME DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY(ID)
);
```

**GIT**

   Version control system to your project folder. Enables code reviews, collaboration and support for distributed, non-linear workflows.

`git init`

**Web base GIT repository hosting service**

   Examples: Github, Gitlab, Bitbucket ....

**NPM**

   Is the default package manager for the JavaScript runtime environment Node.js.

   `npm init` create the package.json files

   `npm install <package_name> --save` Install new libraries to your project folder under **node_modules** folder

**Set up your folder structure**


**More concepts**

* Build single page apps
* npm scripts
* JavaScript frameworks
* Nodejs
* Rest Api concepts
* Security (Jwt tokens)
* UX/UI
