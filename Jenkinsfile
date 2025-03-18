pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20.11.1-alpine'
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
    }
}
