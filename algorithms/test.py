import sys

print ('Number of arguments:', len(sys.argv), 'arguments.')
print ('Argument List:', str(sys.argv))

f=open("algorithms/WenderLindo.txt","w+")
for i in range(10):
    f.write("This is line %d\r\n" % (i+1))
f.close() 

sys.stdout.flush()
