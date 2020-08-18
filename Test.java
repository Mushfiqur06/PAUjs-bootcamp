public class Test {
    public static void main(String[] args) {
        Person person = new Person();
        person.name = "Niloy";
        person.email = "mushfiqur06@gmail.com";
        person.phone = "01788689889";
        person.address = "Dhaka";
        person.age = 25;

        person.printMe();

        Person person2 = new Person();
        person2.name = "Mushfiqur Niloy";
        person2.email = "mushfiqur06@gmail.com";
        person2.phone = "01788689889";
        person2.address = "Dhaka";
        person2.age = 25;

        person2.printMe();
    }
}