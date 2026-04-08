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
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    /usr/local/sonar-scanner/bin/sonar-scanner \
                    -Dsonar.projectKey=todo_app \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://localhost:9000 \
                    -Dsonar.token=YOUR_TOKEN
                    '''
                }
            }
        }
    }
}
