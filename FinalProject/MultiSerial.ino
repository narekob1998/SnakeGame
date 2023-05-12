
#include<Arduino_JSON.h>
JSONVar serialOutput;
const int BUTTON_UP_PIN = 2;
const int BUTTON_RIGHT_PIN = 3;
const int BUTTON_DOWN_PIN = 4;
const int BUTTON_LEFT_PIN = 5;


boolean isUpKeyPressed = false;
boolean isRightKeyPressed = false;
boolean isDownKeyPressed = false;
boolean isLeftKeyPressed = false;



void setup() {
  
  Serial.begin(9600); 
  if(isUpKeyPressed == true)
  {
  pinMode(BUTTON_UP_PIN, INPUT);
  digitalWrite(BUTTON_UP_PIN, HIGH);
  }
  if(isRightKeyPressed == true)
  {
  pinMode(BUTTON_RIGHT_PIN, INPUT);
  digitalWrite(BUTTON_RIGHT_PIN, HIGH);
  }
  if(isDownKeyPressed == true){
  pinMode(BUTTON_DOWN_PIN, INPUT);
  digitalWrite(BUTTON_DOWN_PIN, HIGH);
  }
  if(isLeftKeyPressed == true){
  pinMode(BUTTON_LEFT_PIN, INPUT);
  digitalWrite(BUTTON_LEFT_PIN, HIGH);
  }
  

}

void loop() 
{
  serialOutput["Arrow_UP"] = digitalRead(BUTTON_UP_PIN);
  serialOutput["Arrow_RIGHT"] = digitalRead(BUTTON_RIGHT_PIN);
  serialOutput["Arrow_DOWN"] = digitalRead(BUTTON_DOWN_PIN);
  serialOutput["Arrow_LEFT"] = digitalRead(BUTTON_LEFT_PIN);

  Serial.println(serialOutput);
 
}

