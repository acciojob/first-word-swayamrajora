def firstWord(s):
    s = s.strip()
    space_index = s.find(" ")
    return s if space_index == -1 else s[:space_index]

# Example test cases
print(firstWord('see and stop'))  
print(firstWord(' Hello World!'))
print(firstWord('12345'))        
print(firstWord(''))            

const s = prompt("Enter String:");
alert(firstWord(s));
