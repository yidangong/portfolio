#include "Arduino.h"
#include "SoftwareSerial.h"
#include "DFRobotDFPlayerMini.h"

SoftwareSerial mySoftwareSerial(10, 11); // RX, TX
DFRobotDFPlayerMini myDFPlayer;
void printDetail(uint8_t type, int value);

void setup()
{
  mySoftwareSerial.begin(9600);
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  pinMode(6, INPUT);
  pinMode(7, INPUT);
  digitalWrite(2, LOW);
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalRead(A0);
  digitalRead(A1);
  digitalRead(A2);
  digitalRead(A3);
  Serial.println();
  Serial.println(F("DFRobot DFPlayer Mini Demo"));
  Serial.println(F("Initializing DFPlayer ... (May take 3~5 seconds)"));
  Serial.println(myDFPlayer.begin(mySoftwareSerial));
  // From 0 to 30
  myDFPlayer.volume(30);
}

void loop()
{
  // Touch
  if (digitalRead(2) == HIGH)
  {
    myDFPlayer.playMp3Folder(1);
    Serial.println(F("Play 1"));
    delay(3000);
  }
  if (digitalRead(3) == HIGH)
  {
    myDFPlayer.playMp3Folder(2);
    Serial.println(F("Play 2"));
    delay(3000);
  }
  if (digitalRead(4) == HIGH)
  {
    myDFPlayer.playMp3Folder(3);
    Serial.println(F("Play 3"));
    delay(3000);
  }
  if (digitalRead(5) == HIGH)
  {
    myDFPlayer.playMp3Folder(4);
    Serial.println(F("Play 4"));
    delay(3000);
  }
  if (digitalRead(6) == HIGH)
  {
    myDFPlayer.playMp3Folder(5);
    Serial.println(F("Play 5"));
    delay(3000);
  }
  if (digitalRead(7) == HIGH)
  {
    myDFPlayer.playMp3Folder(6);
    Serial.println(F("Play 6"));
    delay(3000);
  }
  if (analogRead(A0) > 500)
  {
    myDFPlayer.playMp3Folder(7);
    Serial.println(F("Play 7"));
    delay(3000);
  }
  if (analogRead(A1) > 500)
  {
    myDFPlayer.playMp3Folder(8);
    Serial.println(F("Play 8"));
    delay(3000);
  }
  if (analogRead(A2) > 500)
  {
    myDFPlayer.playMp3Folder(9);
    Serial.println(F("Play 9"));
    delay(3000);
  }
  if (analogRead(A3) > 500)
  {
    myDFPlayer.playMp3Folder(10);
    Serial.println(F("Play 10"));
    delay(3000);
  }

  // Print the detail message from DFPlayer to handle different errors and states.
  if (myDFPlayer.available())
  {
    printDetail(myDFPlayer.readType(), myDFPlayer.read());
  }
}

void printDetail(uint8_t type, int value)
{
  switch (type)
  {
  case TimeOut:
    Serial.println(F("Time Out!"));
    break;
  case WrongStack:
    Serial.println(F("Stack Wrong!"));
    break;
  case DFPlayerCardInserted:
    Serial.println(F("Card Inserted!"));
    break;
  case DFPlayerCardRemoved:
    Serial.println(F("Card Removed!"));
    break;
  case DFPlayerCardOnline:
    Serial.println(F("Card Online!"));
    break;
  case DFPlayerUSBInserted:
    Serial.println("USB Inserted!");
    break;
  case DFPlayerUSBRemoved:
    Serial.println("USB Removed!");
    break;
  case DFPlayerPlayFinished:
    Serial.print(F("Number:"));
    Serial.print(value);
    Serial.println(F(" Play Finished!"));
    break;
  case DFPlayerError:
    Serial.print(F("DFPlayerError:"));
    switch (value)
    {
    case Busy:
      Serial.println(F("Card not found"));
      break;
    case Sleeping:
      Serial.println(F("Sleeping"));
      break;
    case SerialWrongStack:
      Serial.println(F("Get Wrong Stack"));
      break;
    case CheckSumNotMatch:
      Serial.println(F("Check Sum Not Match"));
      break;
    case FileIndexOut:
      Serial.println(F("File Index Out of Bound"));
      break;
    case FileMismatch:
      Serial.println(F("Cannot Find File"));
      break;
    case Advertise:
      Serial.println(F("In Advertise"));
      break;
    default:
      break;
    }
    break;
  default:
    break;
  }
}