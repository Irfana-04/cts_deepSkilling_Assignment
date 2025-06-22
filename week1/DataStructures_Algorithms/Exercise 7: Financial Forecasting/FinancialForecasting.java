public class FinancialForecasting {
    public static double forecastFutureValue(double present, double rate, int years) {
        if (years == 0) {
            return present;
        }
        return forecastFutureValue(present, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double present= 10000; //input
        double rate = 0.08; // 8%
        int years = 5;

        double futureValue = forecastFutureValue(present, rate, years);
        System.out.printf("Future Value after %d years:Rs.%.2f\n", years, futureValue);
    }
}
