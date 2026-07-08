pipeline {
    agent any

    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = '0'
        ALLURE_RESULTS_DIR = 'allure-results'
        ALLURE_REPORT_DIR = 'allure-report'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                        sh 'npx playwright install --with-deps'
                    } else {
                        bat 'npm ci'
                        bat 'npx playwright install'
                    }
                }
            }
        }

        stage('Run Playwright tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run fullTest'
                    } else {
                        bat 'npm run fullTest'
                    }
                }
            }
        }

        stage('Generate Allure report') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            if [ -d "$ALLURE_RESULTS_DIR" ]; then
                                npx allure generate "$ALLURE_RESULTS_DIR" --clean -o "$ALLURE_REPORT_DIR"
                            else
                                echo "Allure results directory not found"
                                exit 1
                            fi
                        '''
                    } else {
                        bat '''
                            if exist "%ALLURE_RESULTS_DIR%" (
                                npx allure generate "%ALLURE_RESULTS_DIR%" --clean -o "%ALLURE_REPORT_DIR%"
                            ) else (
                                echo Allure results directory not found
                                exit /b 1
                            )
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**, allure-report/**, test-results/**, playwright-report/**', allowEmptyArchive: true
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'allure-report',
                reportFiles: 'index.html',
                reportName: 'Allure Report'
            ])
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check test logs and Allure results.'
        }
    }
}
