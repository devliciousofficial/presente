<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://raw.githubusercontent.com/devliciouofficial/assets/main/icons/presente.png" alt="Project logo"></a>
</p>

<h3 align="center">Presente!</h3>

<div align="center">

[![javascript](https://img.shields.io/badge/Javascript-016c8c?style=f&logo=javascript&logoColor=yellow)](https://www.javascript.com/)
[![typescript](https://img.shields.io/badge/Typescript-016c8c?style=f&logo=typescript&logoColor=blue)](https://www.typescriptlang.org/)
[![node](https://img.shields.io/badge/NodeJS-016c8c?style=f&logo=node.js&logoColor=green)](https://nodejs.org/en/)
[![MongoDB](https://img.shields.io/badge/MongoDB-016c8c?style=f&logo=MongoDB&logoColor=green)](https://www.javascript.com/)
[![ionic](https://img.shields.io/badge/ionic-016c8c?style=f&logo=ionic&logoColor=blue)](https://ionicframework.com/)
[![angular](https://img.shields.io/badge/Angular-016c8c?style=f&logo=angular&logoColor=red)](https://angular.io/)
[![android studio](https://img.shields.io/badge/Android_Studio-016c8c?style=f&logo=android-studio&logoColor=green)](https://developer.android.com/studio)
   


[![Status](https://img.shields.io/badge/Repo_status-WIP-orange?labelolor=black)](https://media.giphy.com/media/61XS37iBats8J3QLwF/giphy.gif)
[![vscode](https://img.shields.io/badge/IDE-gray?style=flat&labelColor=gray&logo=visual-studio-code&logoColor=blue)](https://code.visualstudio.com/)

</div>

---

<p align="center"> Mesmo distante, presente.
    <br> 
</p>

## 📝 Índice

- [Sobre](#about)
- [Começando pelo começo](#getting_started)
- [Deploy](#deployment)
- [Uso](#usage)
- [Recursos usados](#built_using)
- [Contribua](https://github.com/devliciousofficial/presente/blob/main/CONTRIBUTING.md)
- [Autores](#authors)
- [Agradecimentos](#acknowledgement)
<!--- [TODO](../TODO.md)-->
## 🧐 Sobre <a name = "about"></a>

A pandemia e o isolamento social trouxeram novas formas de consumir, fazendo com que o mercado de entregas crescesse de forma intensa. Entretanto, algumas áreas não foram contempladas – como, por exemplo, a que tratamos em nosso projeto de aplicativo: a entrega de presentes. Em pesquisa informal e não-documentada, o grupo conversou com diversos segmentos sociais, profissionais e etários sobre a ideia de desenvolver um marketplace, nos moldes do iFood, focado na possibilidade de manter as relações afetivas, mesmo à distância.

## 🏁 Começando pelo começo <a name = "getting_started"></a>

Essas instruções fornecerão a você uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

O que você precisa instalar e como instalá-los:

 * Node.js
 * ionic CLI
 * Capacitor
 * Parse Platform
 * Angular CLI

### Instalação

Para instalar o Node.js basta baixa-lo através do link https://nodejs.org/en/

Clone o repostório com o comando abaixo:

```
git clone https://github.com/devliciousofficial/presente.git
```
Após isso, você deve instalar o ionicframework usando os comando abaixo:

```
npm install -g @ionic/cli
```
Se houver uma instalação anterior do Ionic CLI, ele precisará ser desinstalado devido a uma alteração no nome do pacote:
```
npm uninstall -g ionic
npm install -g @ionic/cli
```


Para empacotar o aplicativo a fim de rodar em um dispositivo móvel, instale o Capacitor:

```
npm install @capacitor/core
npm install @capacitor/cli --save-dev
npm install -g @ionic/cli native-run cordova-res
```
Para instalar o Parse Platform e junto com o Javascript SDK use o comando abaixo e depois importe o módulo antes de utiliza-lo:
```
npm install parse
```
Importando o módulo instalado:
```
import Parse from 'parse';
```
Para conectar ao seu aplicativo, é necessário executar os métodos a seguir dentro do construtor do móudulo/arquivo JS que será utilizado. Não esqueça sua APP-KEY e JS-KEY:
```
Parse.serverURL = 'https://parseapi.back4app.com/';
Parse.initialize("YOUR-APP-ID", "YOUR-JS-KEY");
```

Para mais detalhes sobre a instalção do Parse server basta seguir o link: https://www.back4app.com/docs/js-framework/ionic/parse-ionic-sdk



## 🔧 Rodando testes <a name = "tests"></a>

Muitos comandos do Angular CLI geram um arquivo com a extensão .spec.ts. Esses são os arquivos de teste de seu projeto e você pode usar o CLI para executar todos eles e verificar se algum bug foi criado.

Exemplo de uso:
```
ng test
```
<!---
### Divida em testes de ponta a ponta

Explain what these tests test and why

```
Give an example
```


### Estilo de codificação para os testes

Explain what these tests test and why

```
Give an example
```
-->

## 🎈 Uso <a name="usage"></a>
Para utilizar o aplicativo, basta criar um cadastro com uma das opções disponíveis e, após isso, já é possível navegar entre os produtos, escolher o presente, adicionar o endereço do presenteado e finalizar a compra.

## 🚀 Deploy <a name = "deployment"></a>
Para publicação do App, será necessário seguir as intruções do marketplace de sua preferencia: [Android](https://developer.android.com/studio/publish?hl=pt-br) ou [iOS](https://www.apple.com/br/itunes/working-itunes/sell-content/apps/)

## ⛏️ Recursos usados <a name = "built_using"></a>

- [Back4app](https://www.back4app.com/) - BaaS
- [Ionic](https://ionicframework.com/) - Web/Native Framework
- [NodeJs](https://nodejs.org/en/) - Gerenciado de pacotes e SDks
- [Android Studio](https://developer.android.com) - Ambiente de desenvolvimento nativo
- [Parse Platform](https://parseplatform.org/) - Plataforma para desenvolvimento Back-end


## ✍️ Autores <a name = "authors"></a>

- [Sushila Vieira Claro](https://github.com/Suskka2605) - Ideía inicial e Product Owner.
- [Rodrigo Trindade](https://github.com/elir0d) - Desenvolvimento FullStack.
- [Daniella Veronez](https://github.com/Daniella-2907) - UI/UX Designer.
- [Ana Flavia Bezerra](https://github.com/anaflaviabsilva) - Desenvolvimento Front-end.
- [Juliana Siqueira](https://github.com/jusiqueirab) - Desenvolvimento Front-end.
- [Henrique Camargo](https://github.com/Henrique28072001) - Scrum Master.


## 🎉 Agradecimentos <a name = "acknowledgement"></a>

Este projeto não seria possível sem a ajuda de pessoas maravilhosas:
- <a href="https://iconscout.com/icons/gift-box" target="_blank">Gift Box Flat Icon</a> by <a href="https://iconscout.com/contributors/bukeicon">Buke Icon</a> on <a href="https://iconscout.com">Iconscout</a>
