pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/JoaoKleinkauf/exercicio_modulo_12.git'
            }
        }
        
        stage('Instalar dependencias') {
            steps {
               bat 'npm install'
            }
        }
        
        stage('Executar Teste') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}
