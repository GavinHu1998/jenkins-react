pipeline {
    agent any
    stages {
        stage('AWS'){
            agent{
                docker {
                    image 'amazon/aws-cli'
                    reuseNode true
                }
            }
            steps {
                sh'''
                AWS --version
                AWS s3 ls


                '''
            }
        }
    }
}
