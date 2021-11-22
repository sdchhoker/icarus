/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return '';

  const chars = new Map();

  for (let i = 0; i < t.length; i++) {
    const count = chars.get(t[i]) || 0;
    chars.set(t[i], count + 1);
  }

  const wChars = new Map();
  let formed = 0;
  const required = chars.size;
  let left = 0;
  let right = 0;
  let min = Infinity;
  let aLeft = 0;

  while (right < s.length) {
    const char = s.charAt(right);

    if (chars.has(char)) {
      const countW = wChars.get(char) || 0;
      wChars.set(char, countW + 1);

      if (chars.get(char) === countW + 1) {
        formed += 1;
      }
    }

    while (formed === required && left <= right) {
      const char = s.charAt(left);
      if (min > right - left + 1) {
        min = right - left + 1;
        aLeft = left;
      }

      if (chars.has(char)) {
        const wCount = wChars.get(char);
        wChars.set(char, wCount - 1);

        if (chars.get(char) > wCount - 1) {
          formed -= 1;
        }
      }
      left += 1;
    }
    right += 1;
  }
  if (min === Infinity) return '';
  return s.substr(aLeft, min);
};

module.exports = minWindow;

/*
class Solution {
  public String minWindow(String s, String t) {

      if (s.length() == 0 || t.length() == 0) {
          return "";
      }

      // Dictionary which keeps a count of all the unique characters in t.
      Map<Character, Integer> dictT = new HashMap<Character, Integer>();
      for (int i = 0; i < t.length(); i++) {
          int count = dictT.getOrDefault(t.charAt(i), 0);
          dictT.put(t.charAt(i), count + 1);
      }

      // Number of unique characters in t, which need to be present in the desired window.
      int required = dictT.size();

      // Left and Right pointer
      int l = 0, r = 0;

      // formed is used to keep track of how many unique characters in t
      // are present in the current window in its desired frequency.
      // e.g. if t is "AABC" then the window must have two A's, one B and one C.
      // Thus formed would be = 3 when all these conditions are met.
      int formed = 0;

      // Dictionary which keeps a count of all the unique characters in the current window.
      Map<Character, Integer> windowCounts = new HashMap<Character, Integer>();

      // ans list of the form (window length, left, right)
      int[] ans = {-1, 0, 0};

      while (r < s.length()) {
          // Add one character from the right to the window
          char c = s.charAt(r);
          int count = windowCounts.getOrDefault(c, 0);
          windowCounts.put(c, count + 1);

          // If the frequency of the current character added equals to the
          // desired count in t then increment the formed count by 1.
          if (dictT.containsKey(c) && windowCounts.get(c).intValue() == dictT.get(c).intValue()) {
              formed++;
          }

          // Try and contract the window till the point where it ceases to be 'desirable'.
          while (l <= r && formed == required) {
              c = s.charAt(l);
              // Save the smallest window until now.
              if (ans[0] == -1 || r - l + 1 < ans[0]) {
                  ans[0] = r - l + 1;
                  ans[1] = l;
                  ans[2] = r;
              }

              // The character at the position pointed by the
              // `Left` pointer is no longer a part of the window.
              windowCounts.put(c, windowCounts.get(c) - 1);
              if (dictT.containsKey(c) && windowCounts.get(c).intValue() < dictT.get(c).intValue()) {
                  formed--;
              }

              // Move the left pointer ahead, this would help to look for a new window.
              l++;
          }

          // Keep expanding the window once we are done contracting.
          r++;
      }

      return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);
  }
}
 */