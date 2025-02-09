package model;
public class Produto {
    private static int idCounter = 1;
    private final int id;
    private String nome;
    private double preco;
    public Produto(String nome, double preco) {
        this.id = idCounter++;
        this.nome = nome;
        this.preco = preco;
    }
    public int getId() {
        return id;
    }
    @Override
    public String toString() {
        return "Produto{" + "id=" + id + ", nome='" + nome + '\'' + ", preco=" + preco + '}';
    }
}