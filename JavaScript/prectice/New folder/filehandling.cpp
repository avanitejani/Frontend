#include<iostream>
#include<fstream>
using namespace std;
int main() {
    myfile ("filetops.txt");
    myfile << "file cam be tricky ,but it is fun enough!";
    myfile.close();
}
