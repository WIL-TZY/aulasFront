## BAIXAR SQLITE ## 

    Link: https://www.sqlite.org/download.html

- Fazer o download da última opção da parte amarela na aba download.
- Extrair o arquivo e colocar no `PATH`.
- No Vscode, instalar a extensão `SQLite Viewer`.

As `PRIMARY KEY` (chaves primárias) são necessariamente `NOT NULL` e auto-incrementáveis.

Geralmente representam o ID.

Outros tipos de dados, como os dados do tipo `TEXT`, podem ser `NOT NULL` ou não.
Se forem NOT NULL, são obrigatórias.

## OPERAÇÕES ##

- Busca
- Inserção
- Update
- Deleção
- Etc

## ORM ##

Object Relating Method

## DIALETOS SQL ##
- DDL: Data Definition Language
- DML: Data Manipulation Language


## INICIANDO BANCO (DDL) ##
Criar um arquivo com o nome e uma extensão `.sqlite`.
- Use o comando `sqlite3 .\database.sqlite` no terminal para inicar o banco de dados.
- Use esse comando para **criar** uma tabela com alguns dados:
    ```sql
    CREATE TABLE agenda (id integer PRIMARY KEY, nome TEXT NOT NULL, idade integer);
    ```

## COMANDOS DO BANCO (DML) ##
- Para **inserir** dados na tabela:
    ```sql
    INSERT INTO agenda (nome, idade, telefone, email) VALUES ('Natan', 18, 61999999999, 'natan@gmail.com')
    ```
- Para **atualizar** algum dado na tabela:
    ```sql
    UPDATE agenda SET idade = 18 WHERE nome='Natan';
    ```
- Para **deletar** algum dado na tabela:
    ```sql
    DELETE FROM agenda WHERE id = 1;
    ```
    **OBS: Muito cuidado!!! Não utilize o comando `DELETE FROM agenda` sem o comando `WHERE`, pois isso deletará todos os dados da tabela.**
- Para **visualizar** todos os dados na tabela:
    ```sql
    SELECT * FROM agenda;
    ```
- Para **visualizar** apenas alguns dados na tabela:
    ```sql
    SELECT id, nome, idade FROM agenda;
    ```
