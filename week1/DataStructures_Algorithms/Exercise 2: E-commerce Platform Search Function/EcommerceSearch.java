import java.util.*;


class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + ": " + productName + " [" + category + "]";
    }
}

class Search {
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }
    public static void sortProductsByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
    }
    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(targetName);

            if (compare == 0)
                return products[mid];
            else if (compare < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }
}

public class EcommerceSearch {
    public static void main(String[] args) {
    
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Books", "Education"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Camera", "Photography")
        };

       
        System.out.println("Linear Search");//linear
        Product linearResult = Search.linearSearch(products, "Laptop");
        System.out.println(linearResult != null ? linearResult : "Product not found");
   
        Search.sortProductsByName(products);//binary
        System.out.println("\nBinary Search");
        Product binaryResult = Search.binarySearch(products, "Laptop");
        System.out.println(binaryResult != null ? binaryResult : "Product not found");
    }
}
