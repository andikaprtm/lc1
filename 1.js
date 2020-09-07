/**
 * ==================
 * PSEUDOCODE
 * ==================
 * 
 * Buatlah Pseudocode untuk menyelsaikan masalah dibawah ini :
 * 
 * Seorang Student mempelajari Javascript di sebuah bootcamp
 * Level motivasinya di awal adalah 100 dan rate belajar dia 10 jam/ hari
 * Dalam perjalanan belajarnya, dia akan melewati beberapa ujian dengan stress
 * 
 * Jumlah stress mempengaruhi level motivasinya:
 * - Jika stress dibawah level  20, motivasi tidak berkurang
 * - Jika stress level  20 ke atas, motivasi berkurang 10
 * - Jika stress level  40 ke atas, motivasi berkurang 20
 * - Jika stress level  60 ke atas, motivasi berkurang 30
 * - Jika stress level  80 ke atas, motivasi berkurang 40
 * - Jika stress level 100, motivasi berkurang 50
 * - Jika stress level diatas 100, motivasi menjadi 0
 * 
 * Tampilkan level motivasi Student saat ini
 * 
 * Contoh :
 * motivasi awal : 100
 * banyak ujian : 3
 * stress level : 10
 * motivasi Student = 100 - (3 * 0) = 100
 * Jadi, level motivasi Student saat ini adalah 100
 * 
 * Contoh :
 * motivasi awal : 100
 * banyak ujian : 4
 * stress level : 20
 * motivasi Student = 100 - (4 * 10) = 60
 * Jadi, level motivasi Student saat ini adalah 60
 * 
 * 
 * WRITE YOUR PSEUDOCODE HERE
 * =================================
 * GET 'motivasiAwal' with any number value
 * GET 'banyakUjian' with any number value
 * GET 'stressLevel' wit any number value
 * 
 * IF 'stress' MORE THAN 100 THEN
 *   CALCULATE 'motivasiAwal' AS 0
 * ELSE IF 'stress' EQUAL TO 100 THEN
 *   CALCULATE 'motivasiAwal' MINUS BY 50 TIMES 'banyakUjian'
 * ELSE IF 'stress' MORE THAN EQUAL TO 80 THEN
 *   CALCULATE 'motivasiAwal' MINUS BY 40 TIMES 'banyakUjian'
 * ELSE IF 'stress' MORE THAN EQUAL TO 60 THEN
 *   CALCULATE 'motivasiAwal' MINUS BY 30 TIMES 'banyakUjian'
 * ELSE IF 'stress' MORE THAN EQUAL TO 40 THEN
 *   CALCULATE 'motivasiAwal' MINUS BY 20 TIMES 'banyakUjian'
 * ELSE IF 'stress' MORE THAN EQUAL TO 20 THEN
 *   CALCULATE 'motivasiAwal' MINUS BY 10 TIMES 'banyakUjian'
 * ENDIF
 * DISPLAY "level motivasi saat ini" 'motivasiAwal
 */

// * - Jika stress dibawah level  20, motivasi tidak berkurang
// * - Jika stress level  20 ke atas, motivasi berkurang 10
// * - Jika stress level  40 ke atas, motivasi berkurang 20
// * - Jika stress level  60 ke atas, motivasi berkurang 30
// * - Jika stress level  80 ke atas, motivasi berkurang 40
// * - Jika stress level 100, motivasi berkurang 50
// * - Jika stress level diatas 100, motivasi menjadi 0
// * 