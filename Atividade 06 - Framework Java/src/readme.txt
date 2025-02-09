# Framework Simples em Java

## Como Executar

### Compilar o projeto

Abra um terminal na pasta raiz do projeto e execute:

```sh
javac -d out -sourcepath src src/main/Main.java
```

Isso compilará todas as classes Java e armazenará os arquivos compilados na pasta `out/`.

### Executar o programa

Após a compilação, execute o programa principal:

```sh
java -cp out main.Main
```

Isso executará a classe `Main.java` e mostrará a saída esperada com a lista de produtos cadastrados.

### Criar um arquivo `.jar`

Caso deseje empacotar o projeto como um `.jar`, utilize:

```sh
jar cfe MeuFramework.jar main.Main -C out .
```

Para executar o `.jar`, utilize:

```sh
java -jar MeuFramework.jar
```

## Demonstração

### Exemplo de Saída Esperada

```
Lista de Produtos:
Produto{id=1, nome='Laptop', preco=3000.0}
Produto{id=2, nome='Mouse', preco=50.0}
```

## Como Testar

1. Modifique o código na classe `Main.java` para adicionar, atualizar ou remover produtos.
2. Execute novamente os comandos para compilar e rodar o programa.
3. Verifique a saída no console para confirmar as alterações.



