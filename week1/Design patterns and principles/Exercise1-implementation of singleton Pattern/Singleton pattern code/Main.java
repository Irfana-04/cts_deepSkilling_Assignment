public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("This is first call");

        Logger logger2 = Logger.getInstance();
        logger2.log("This is second call");
        if (logger1 == logger2) {
            System.out.println("Both instances are same.");
        } else {
            System.out.println("Different instances! violation of singleton principle.");
        }
    }
}
