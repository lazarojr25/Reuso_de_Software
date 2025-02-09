package rep;
import java.io.*;
import java.util.*;
public class InFileRepository<T> implements CrudRepository<T> {
    private final String filename;
    public InFileRepository(String filename) {
        this.filename = filename;
    }
    @Override
    public void save(T entity) {
        try (FileWriter fw = new FileWriter(filename, true);
             BufferedWriter bw = new BufferedWriter(fw)) {
            bw.write(entity.toString() + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @Override
    public T findById(int id) {
        return null; // Implementação simples, real poderia envolver leitura e parsing do arquivo
    }
    @Override
    public void update(T entity) {
        // Requereria uma lógica de sobrescrita do arquivo
    }
    @Override
    public void delete(int id) {
        // Requereria uma lógica de reescrita do arquivo sem o item removido
    }
    @Override
    public List<T> findAll() {
        List<T> entities = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = br.readLine()) != null) {
                entities.add((T) line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return entities;
    }
}