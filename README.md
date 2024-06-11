# Projetos Angular: Shell e Remote

## Introdução
Este repositório contém dois projetos Angular, denominados "shell" e "remote". Eles implementam uma arquitetura de micro front-end, que permite desenvolver e implantar diferentes partes de uma aplicação de forma independente.

## Tecnologias Utilizadas
- **Angular**: 15.2.11
- **Node.js**: 18.20.3

## Configuração e Execução dos Projetos

### Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado na versão 18.20.3.

### Passos para rodar os projetos

1. **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <DIRETORIO_DO_REPOSITORIO>
    ```

2. **Instale as dependências para cada projeto:**

    Para o projeto "shell":
    ```bash
    cd shell
    npm install
    ```

    Para o projeto "remote":
    ```bash
    cd ../remote
    npm install
    ```

3. **Inicie os projetos:**

    Primeiro, inicie o projeto "remote":
    ```bash
    cd remote
    npm start
    ```

    Em seguida, inicie o projeto "shell":
    ```bash
    cd ../shell
    npm start
    ```

4. **Acesse a aplicação:**

    Após iniciar os projetos, a aplicação estará disponível no navegador. Por padrão, o projeto "shell" deve estar acessível em `http://localhost:4200`.

## Micro Front-End

### O que é Micro Front-End?

Micro front-end é uma abordagem arquitetural que divide uma aplicação frontend monolítica em pequenos fragmentos independentes, cada um gerenciado por diferentes equipes. Cada fragmento pode ser desenvolvido, testado e implantado independentemente, mas funciona como uma única aplicação unificada para o usuário final.

### Vantagens do Micro Front-End

- **Escalabilidade**: Equipes podem trabalhar de forma independente em diferentes partes da aplicação, melhorando a escalabilidade do desenvolvimento.
- **Manutenção**: Com partes menores e mais focadas, a manutenção e a atualização do código se tornam mais gerenciáveis.
- **Tecnologia Agnóstica**: Cada micro front-end pode ser desenvolvido usando diferentes tecnologias e frameworks, permitindo o uso das melhores ferramentas para cada caso.
- **Deploy Independente**: Micro front-ends podem ser implantados independentemente, reduzindo o impacto e o risco de deploys.

### Desvantagens do Micro Front-End

- **Complexidade**: A arquitetura adiciona complexidade na comunicação entre os micro front-ends e na coordenação entre equipes.
- **Performance**: Pode haver impacto na performance devido à carga de múltiplos micro front-ends, especialmente se não forem bem otimizados.
- **Consistência**: Manter uma aparência e comportamento consistente em todos os micro front-ends pode ser desafiador.

## Conclusão
Este repositório demonstra a implementação de uma arquitetura de micro front-end utilizando Angular e Node.js. Os projetos "shell" e "remote" exemplificam como dividir uma aplicação em partes independentes, cada uma com seus próprios ciclos de desenvolvimento e implantação.

Sinta-se à vontade para explorar e modificar os projetos conforme necessário. Para mais informações sobre micro front-ends e Angular, consulte a documentação oficial.

---

Se você tiver dúvidas ou problemas, abra uma issue ou entre em contato com os mantenedores do projeto.
