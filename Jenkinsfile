pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20.19-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                ls -la
                node --version
                npm --version
                npm install
                npm run build
                ls -la
                '''
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:20.19-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                test -f dist/index.html
                npm run test
                '''
            }
        }
        stage('DeployAWS') {
            agent {
                docker {
                    image 'amazon/aws-cli'
                    reuseNode true
                    args '--entrypoint=""'
                }
            }
            environment {
                AWS_S3_BUCKET = 'my-new-jenkins-2025032' 
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'my-temp', passwordVariable: 'AWS_SECRET_ACCESS_KEY', usernameVariable: 'AWS_ACCESS_KEY_ID')]) {
                    sh'''
                    aws --version
                    aws s3 ls
                    echo "Hello S3!" > index.html
                    # aws s3 cp index.html s3://my-new-jenkins-2025032/index.html
                    aws s3 sync dist s3://$AWS_S3_BUCKET
                    ''' 
                }
            }
        }
    }
}
