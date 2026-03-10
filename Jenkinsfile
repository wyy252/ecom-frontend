@Library('ecom-shared-lib') _

ciPipeline(
    serviceName: 'ecom-frontend',
    imageName: '3020244252/ecom-frontend',
    dockerCredentialsId: 'dockerhub-creds',
    buildCommand: 'npm ci && npm run lint && npm run build',
    testCommand: 'npm test',
    devDeployCommand: 'docker rm -f ecom-frontend-dev || true && docker run -d --name ecom-frontend-dev -p 3100:80 $IMAGE_NAME:$BUILD_TAG_NAME',
    stagingDeployCommand: 'docker rm -f ecom-frontend-staging || true && docker run -d --name ecom-frontend-staging -p 3200:80 $IMAGE_NAME:$BUILD_TAG_NAME',
    prodDeployCommand: 'docker rm -f ecom-frontend-prod || true && docker run -d --name ecom-frontend-prod -p 3300:80 $IMAGE_NAME:$BUILD_TAG_NAME'
)