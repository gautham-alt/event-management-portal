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
                sh '''
                test -f index.html
                test -f register.html
                test -f admin-login.html
                test -f admin-dashboard.html
                test -f css/style.css
                test -f js/register.js
                test -f js/admin-login.js
                test -f js/dashboard.js
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Deploying to Nginx"

                cp -r ./* /var/www/html/

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
