pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'node app.js &'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarserver') {
                    sh '''
                    /usr/local/sonar-scanner/bin/sonar-scanner \
                    -Dsonar.projectKey=todo_app \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://localhost:9000 \
                    -Dsonar.token=sqa_03fe139133c0258800da28b0679e2d0672d47fa9
                    '''
                }
            }
        }
    }
}
