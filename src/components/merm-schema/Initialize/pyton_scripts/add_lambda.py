import os
import sys
import pexpect
import argparse


def main():
    parser = argparse.ArgumentParser(description='Add lambda function to the project')
    parser.add_argument("-N",'--name', metavar='name', type=str, help='name of the lambda function')
    parser.add_argument("-D",'--description', metavar='description', type=str, help='description of the lambda function')
    parser.add_argument("-R",'--runtime', metavar='runtime', type=str, help='runtime of the lambda function')
    args = parser.parse_args()
    print("adding lambda function: ", args.name,"\n\n")
    
    os.system("amplify add function")


    pass

if __name__ == '__main__':
    main()