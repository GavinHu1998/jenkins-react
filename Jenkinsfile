pipeline {
    agent any
    environment{
        NETLIFY_SITE_ID = '84f181b4e-64a7-4bd7-9baa-6d11eec13e23'
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
        stage('Deploy') {
            agent {
                docker {
                    image 'node:20.19-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                npm install netlify-cli
                node_modules/.bin/netlify --version
                echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                node_modules/.bin/netlify status
                node_modules/.bin/netlify deploy --prod --dir=build
                '''
            }
        }
    }
}
