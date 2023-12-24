import random

#i = number of letters in the password
#j = number of numbers in the password
def password_gen(i,j):

    password = ""

    letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    numArr = ["0","1","2","3","4","5","6","7","8","9"]

    for x in range(i):
        random_value1 = random.choice(letterArr)
        password += random_value1
    
    for y in range(j):
        random_value2 = random.choice(numArr)
        password += random_value2



    char_list = list(password)

    # Shuffle the list
    random.shuffle(char_list)

    # Convert the list back to a string
    randomized_password = ''.join(char_list)

    return randomized_password


print(password_gen(8,3))


    
