
import random
def password_gen():

    password = ""

    letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    numArr = ["0","1","2","3","4","5","6","7","8","9"]

    for x in range(4):
        random_value1 = random.choice(letterArr)
        password += random_value1
    
    for y in range(4):
        random_value2 = random.choice(numArr)
        password += random_value2

    return password


print(password_gen())


    
