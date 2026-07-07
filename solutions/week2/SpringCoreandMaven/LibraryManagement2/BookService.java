package solutions.week2.SpringCoreandMaven.LibraryManagement2;

public class BookService {

    private BookRepository bookRepository;

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("Book Service is working.");
        bookRepository.displayBooks();
    }
}