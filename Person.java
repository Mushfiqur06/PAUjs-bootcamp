public class Person {
    String name;
    String email;
    String phone;
    String address;
    int age;

    void printMe() {
        System.out.println(this.name);
        System.out.println(this.email);
        System.out.println(this.phone);
        System.out.println(this.address);
        System.out.println(this.age);
    }
}