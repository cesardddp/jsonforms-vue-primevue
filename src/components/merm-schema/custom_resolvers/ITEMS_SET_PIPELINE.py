import os
import re


BUILDED_RESOLVERS = os.path.realpath("amplify/backend/api/mermadmin/build/resolvers")


def getRelationships():
    allFunctions=os.listdir(BUILDED_RESOLVERS)
    regex = r"^(Mutation\.|Query\.|Subscription\.)|.*\d.*"
    relationships=[]
    relationships = list(filter(lambda x: not re.match(regex, x), allFunctions))

    print("Relationships: ", relationships)
    print ("Tamanho: ", len(relationships))

    return relationships

if __name__ == "__main__":
    getRelationships()