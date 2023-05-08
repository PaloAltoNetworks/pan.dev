---
id: deploy-defenders
title: Deploy Prisma Cloud Defenders
sidebar_position: 6
---

Defenders enforce the policies you set in the Prisma Cloud Compute console and protect specific types of assets.
To take advantage of the agent-based security features of Prisma Cloud, you must deploy a Defender agent.

## Prerequisites
Make sure that:
- Your system meets the [requirement](https://github.com/PaloAltoNetworks/prisma-cloud-docs/blob/master/compute/admin_guide/install/system_requirements.adoc).
- The Prisma Cloud Compute console can access the systems running at your end.
    - PCCE (Self-hosted)
        - The default port is 8083 which is outgoing from Defender to Prisma Cloud Compute.

        > _**Note:**_ Port 443 for outgoing from Defender to Prisma Cloud Compute is not configurable.
    - PCEE (SaaS)
        - The default port is 8084 (over the web socket).
- You have sudo access on the host to install Defender.

You can categorize Defenders based on the deployment as 
- Single 
    - Container
    - Bare-metal or virtual host
    - Serverless function
    - App-embedded
- Orchestrator on an entire cluster at the orchestration level.

But, there are mainly two Defender types based on the assets that you can deploy using Prisma Cloud Compute APIs
- App-embedded
- Serverless

![Deploy Defender Workflow](/prisma/img/deploy_defenders_via_api_calls.svg)

## Deploy App-embedded Defender
Secure your workloads, tasks (apps) by embedding a Defender into the workloads.

### Manual Deployment:
Use this deployment when you want to secure all tasks (apps) or workloads in a cloud container irrespective of whether the containers are self-managed, Amazon ECS managed, or docker managed.

1. Download the App Embedded Defender bundle by using the [App Embedded Defender](/prisma-cloud/api/cwpp/get-images-twistlock-defender-app-embedded-tar-gz) ![alt text](/icons/api-icon-pan-dev.svg) endpoint:

    ```bash
    $ curl -sSL -k --header "authorization: Bearer <key>" https://<CONSOLE>/api/v<VERSION>/images/twistlock_defender_app_embedded.tar.gz -O
    ```

2. Set the following environment variables:
    - ENV DEFENDER_TYPE="appEmbedded"
    - ENV DEFENDER_APP_ID="unique identifier of your application"
    - ENV FILESYSTEM_MONITORING="false"
    - ENV WS_ADDRESS="wss://us-west1.cloud.twistlock.com:443"
    - ENV DATA_FOLDER="absolute path to a writable folder"
    - ENV INSTALL_BUNDLE="key"

3. Extract Defender to a data folder.

    ```
    ADD twistlock_defender_app_embedded.tar.gz <DATA_FOLDER>
    ```

4. Modify the run command or entrypoint such that your app command is an argument to Defender.
    ```
    <DATA_FOLDER>/defender app-embedded /path/to/your/app --arg1 value1 --arg2 value2
    ```

### Automatic Deployment:
Choose your template for deployment based on whether you wish to secure applications (or tasks) in Amazon ECS managed stack running containers or in docker managed containers.

#### Native template:
Use this cURL sample request to protect a Amazon ECS Fargate task definition in native format.

- Generate a protected task definition using the [Defender Fargate](prisma-cloud/api/cwpp/post-defenders-fargate-json/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint:

  ```bash
    $ curl -k \
     -u <USER> \
     -H 'Content-Type: application/json' \
     -X POST \
     --data-binary "@unprotected.json"
     --output protected.json \
   "https://<CONSOLE>/api/v<VERSION>/defenders/fargate.json?consoleaddr=<HOSTNAME>&defenderType=appEmbedded"
   ```

#### CloudFormation template (in JSON):
Use this cURL sample request to protect a Amazon ECS Fargate task definition in CloudFormation template in JSON.

- Generate a protected template using the [Defender Fargate](prisma-cloud/api/cwpp/post-defenders-fargate-json/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

  ```bash
  $ curl -k \
    -u <USER> \
    -H 'Content-Type: application/json' \
    -X POST \
    --data-binary "@unprotected.json"
    --output protected.json \
  "https://<CONSOLE>/api/v<VERSION>/defenders/fargate.json?cloudFormation=true&consoleaddr=<console_address>&filestemMonitoring=false&interpreter=&project=Central+Console"
  ```


#### CloudFormation template (in YAML):
Use this cURL sample request to protect a Amazon ECS Fargate task definition in CloudFormation template in YAML.

- Generate a protected template using the [Defender Fargate](prisma-cloud/api/cwpp/post-defenders-fargate-yaml/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

  ```bash
  $ curl -k \
    -u <USER> \
    -H 'Content-Type: application/yaml' \
    -X POST \
    --data-binary "@unprotected.yaml"
    --output protected.yaml \
  "https://<CONSOLE>/api/v<VERSION>/defenders/fargate.yaml?cloudFormation=true&consoleaddr=<console_address>&filestemMonitoring=false&interpreter=&project=Central+Console"
  ```


### Dockerfile Deployment:

Use this deployment when you want to secure applications (or tasks) in docker managed containers.

1. Deploy using the [App Embedded Defender](prisma-cloud/api/cwpp/post-defenders-app-embedded/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint. 

2. Enter or assign values for the following mandatory fields in the cURL example below:
    - appID: ID of the application.
    - dataFolder: Path to the data folder
    - Dockerfile: Path to the docker file

3. Generate the docker file.

    ```bash
    $ curl -k \
    -u <USER> \
    -H 'Content-Type: application/json' \
    -X POST \
    -d \
    '{
        "appID": "my-app",
        "consoleAddr": "https://localhost",
        "dataFolder": "/var/lib/docker/containers/twistlock/tmp",
        "dockerfile": "/var/lib/docker/overlay2/18e8cf48"
    }' \
    "https://<CONSOLE>/api/v<VERSION>/defenders/app-embedded"
    ```


## Deploy Serverless Defender

You can protect the Azure and AWS serverless functions by directly embedding the Defenders in the resources.

### AWS Serverless (Lambda Layers) Deployment
Use this deployment to embed Defender to AWS Lambda Layers so that all serverless functions are invoked with security.

1. Download the Serverless Defender bundle for AWS Lambda layer by using the [Serverless Defender](prisma-cloud/api/cwpp/post-images-twistlock-defender-layer-zip/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

    Specify the function name, runtime, and region in the following API cURL request:

    ```bash
    $ curl -sSL -k --header "authorization: Bearer <API Key>" -X POST https://<CONSOLE>/api/v<VERSION>/images/twistlock_defender_layer.zip -o twistlock_defender_layer.zip -d "{\"runtime\":\"nodejs14.x\",\"provider\":\"aws\"}"
    ```


2. Upload the layer to AWS and add it to the function's configuration.

3. Save current Lambda handler setting in ORIGINAL_HANDLER environment variable.

4. Change the Lambda handler setting to Prisma Cloud Compute handler (twistlock.handler).

5. Generate the value for the TW_POLICY environment variable by specifying your function's name (defined in key-value pair).

### AWS Serverless (Embedded)
Use this deployment to embed Defender to secure each AWS Lambda function.

1. Download the Serverless Defender bundle by using the [Serverless Defender](prisma-cloud/api/cwpp/post-defenders-serverless-bundle/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.
    
    Specify the runtime*, provider*, function name, and region.

        - (Mandatory) provider: Use aws.
        - (Mandatory) For runtime: Add the runtime values: python, python3.6, python3.7, python3.8, python3.9, nodejs12.x, nodejs14.x, dotnet6, java8, java11, or ruby2.7.

    Self-hosted (AWS) sample cURL Request:

    ```bash
    $ curl -k \
    -u <USER> \
    -H 'Content-Type: application/octet-stream' \
    -o serverless_bundle.zip \
    -X POST \
    -d '{"provider": ["aws"], "runtime": ["nodejs14.x"]}' \
    "https://<CONSOLE>/api/v<VERSION>/defenders/serverless/bundle"
    ```


2. Unzip the bundle in your function’s root directory
3. Add the Serverless Defender to the function by importing the Prisma Cloud Compute (twistlock) library and wrapping the function's handler.

    #### AWS (Embedded)

    **Async handler**
    ```
    var twistlock = require('./twistlock');
    exports.handler = async (event, context) => {
    ...
    };
    exports.handler = twistlock.asyncHandler(exports.handler);
    ```

    **Non-async handler**
    ```
    var twistlock = require('./twistlock');
    exports.handler = (event, context, callback) => {
    ...
    };
    exports.handler = twistlock.handler(exports.handler);
    ```


4. Add the package reference in the project configuration file.

    ```
    <Project>
    <ItemGroup>
        <PackageReference Include="Twistlock" Version="22.12.427" />
        <TwistlockFiles Include="twistlock\*" Exclude="twistlock\twistlock.22.12.427.nupkg"/>
    </ItemGroup>
    <ItemGroup>
        <None Include="@(TwistlockFiles)" CopyToOutputDirectory="Always" LinkBase="twistlock\" />
    </ItemGroup>
    ...
    </Project>
    ```

5. Generate the value for the **TW_POLICY** environment variable by specifying your serverless function's name (defined in key-value pair).

#### Azure serverless
Use this deployment to embed Defender to secure each Azure serverless function.

1. Download the Serverless Defender bundle by using the [Serverless Defender](prisma-cloud/api/cwpp/post-defenders-serverless-bundle/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.
    
    Specify the runtime*, provider*, function name, and region.
        
        - (Mandatory) provider: Use azure.
        - (Mandatory) For runtime: Add dotnet3 or dotnet6.
    
    SaaS (Azure) sample cURL Request:
    
    ```bash
    $ curl -sSL -k --header "authorization: Bearer <key>" -X POST https://<CONSOLE>/api/v<VERSION>/defenders/serverless/bundle -o twistlock_serverless_defender.zip -d "{\"runtime\":\"dotnet3\",\"provider\":\"azure\"}"
    ```

2. Unzip the bundle in your function’s root directory.
3. Add the Serverless Defender to the function by importing the Prisma Cloud Compute (twistlock) library and wrapping the function's handler.

    **Azure Serverless function**
    ```
    public class ... {
    // Original handler
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
        {
        Twistlock.Serverless.Init(log);
        ...
        }
    }
    ```

4. Add the package as a dependency in the **nuget.config** file.
    
    ```
    <configuration>
    <packageSources>
        <add key="local-packages" value="./twistlock"/>
    </packageSources>
    </configuration>
    ```

5. Generate the value for the **TW_POLICY** environment variable by specifying your serverless function's name (defined in key-value pair).



