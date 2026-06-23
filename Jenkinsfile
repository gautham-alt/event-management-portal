pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Event Management Portal'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Deploying to Nginx"

                rm -rf /var/www/html/*

                cp -r * /var/www/html/

                echo "Deployment Complete"
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
