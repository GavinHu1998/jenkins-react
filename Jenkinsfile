pipeline {
    agent any
    environment {
        NETLIFY_SITE_ID = '6bbd3023-e306-4e6f-9aee-315f3f0fa8f1'
        NETLIFY_AUTH_TOKEN = credentials('myToken')
    }
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
        stage('Deploy'){
            agent{
                docker {
                    image 'node:20.19-alpine'
                    reuseNode true
                }
            }
            steps {
                sh'''
                npm install netlify-cli
                node_modules/.bin/netlify --version
                echo "Deploying to production. Site ID : $NETLIFY_SITE_ID"
                node_modules/.bin/netlify status
                node_modules/.bin/netlify deploy --prod --dir=dist
                '''
            }
        }
    }
}
