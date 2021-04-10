
import java.util.Arrays;

public class Algorithm {
  // Find index of a certain value
  private static int valueIndexByFor(Integer[] arrayInt, int value) {
    for (int i = 0; i < arrayInt.length; i++) {
      if (arrayInt[i] == value) {
        return i;
      }
    }
    return -1;
  }

  private static int valueIndexByBuiltin(Integer[] arrayInt, int value) {
    return Arrays.asList(arrayInt).indexOf(value);
  }

  // Checker whether number is prime
  private static boolean isPrime(int number) {
    if (number < 0) {
      throw new ArithmeticException("Value must be positive integer");
    }
    if (number <= 1)
      return false;
    for (int i = 2; i < number; i++) {
      if (number % 2 == 0)
        return false;
    }
    return true;
  }

  // Checker whether passed string is anagram
  private static boolean isAnagram(String original, String test) {
    if (original.length() != test.length())
      return false;
    char[] org = original.toCharArray();
    char[] testChar = test.toCharArray();
    Arrays.sort(org);
    Arrays.sort(testChar);
    return Arrays.equals(org, testChar);
  }

  // Sort array on integers in ASC order
  private static Integer[] reorder(Integer[] nbrs) {
    Arrays.sort(nbrs);
    return nbrs;
  }

  public static void main(String[] args) {
    Integer[] arrayInt = { 1, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7 };
    int value = 4;

    int forIdx = valueIndexByFor(arrayInt, value);
    int builtinIdx = valueIndexByBuiltin(arrayInt, value);
    boolean prime = isPrime(1);
    boolean anagram = isAnagram("anna", "aann");
    Integer[] order = reorder(arrayInt);
    System.out.println("[For loop] Index of value " + value + " is " + forIdx);
    System.out.println("[Builtin asList API] Index of value " + value + " is " + builtinIdx);
    System.out.println("Passed int is prime " + prime);
    System.out.println("Passed string is Anagram " + anagram);
    System.out.println("Order numbers in ASC order " + Arrays.toString(order));
  }
}