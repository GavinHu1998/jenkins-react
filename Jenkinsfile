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
                npm test
                '''
            }
        }
    }
}
