from random import randint

def compare(l1, l2):
    for i in range(len(l1)-1):
        if l1[i] != l2[i]:
            return False
    return True

def toggle(l, index):
    if l[index] == 0:
        l[index] = 1
    else:
         l[index] = 0

def randomSolve(l, fin):
    counter = 0
    while not compare(l, fin):
        randomIndex = randint(0,3)
        toggle(l, randomIndex)
        # print(l)
        counter = counter + 1
    return counter

def createRandomList(length):
    lis = []
    for i in range(length):
        lis.append(randint(0,1))
    return lis

def updateDictionary(dict, key):
    if key in dict.keys():
        dict[key] = dict[key] + 1
    else:
        dict[key] = 1

def printDict(dict):
    for key in sorted(dict):
        print(str(key) + ",\t" + str(dict[key]))

turnsDistribution = {}
cardsDistribution = {}
fin = [0,0,0,0]
numRuns = 100000

for i in range(numRuns):
    cardSet = createRandomList(4)
    cardSetString = ''.join(str(card) for card in cardSet)
    updateDictionary(cardsDistribution, cardSetString)

    totalTurns = randomSolve(cardSet, fin)
    updateDictionary(turnsDistribution, totalTurns)

print("games = " + str(numRuns))
print("\n" + "turns\toccurances" + "\n------------------")
printDict(turnsDistribution)
print("\n" + "cards\toccurances" + "\n------------------")
printDict(cardsDistribution)