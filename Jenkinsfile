pipeline {
    agent any
    stages {
        stage('Deploy'){
            agent{
                docker {
                    image 'amazon/aws-cli'
                    reuseNode true
                    args '--entrypoint=""'
                }
            }
            steps {
                sh'''
                aws --version
                aws s3 ls
                echo "Deploying to AWS S3" > index.html
                


                '''
            }
        }
    }
}
