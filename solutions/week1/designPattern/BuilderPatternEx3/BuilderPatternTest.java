package solutions.week1.designPattern.BuilderPatternEx3;
public class BuilderPatternTest {

    public static void main(String[] args) {

        // Gaming PC
        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel Core i9")
                .setRAM(32)
                .setStorage(1000)
                .setGraphicsCard("NVIDIA RTX 4090")
                .setOperatingSystem("Windows 11")
                .build();

        // Office PC
        Computer officePC = new Computer.Builder()
                .setCPU("Intel Core i5")
                .setRAM(16)
                .setStorage(512)
                .setOperatingSystem("Windows 10")
                .build();

        // Display configurations
        System.out.println("Gaming PC Configuration:");
        gamingPC.displayConfiguration();

        System.out.println("Office PC Configuration:");
        officePC.displayConfiguration();
    }
}