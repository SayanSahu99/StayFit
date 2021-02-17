/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

int main()
{
    ll t;
    cin>>t;
    
    while(t--){
        
        ll m, n, v = 0;
        set<ll> s;
        cin>>n>>m;
        
        ll a[n], b[m];
        
        for(int i = 0; i < n ;i++){
            cin>>a[i];
        }
        
        for(int i = 0; i < m ;i++){
            cin>>b[i];
        }


        s.insert(v);

        
        for(int i = 0; i < n; i++){
            v = v | a[i];
            s.insert(v);
        }

        
        
        for(int i = 0; i < m; i++){
            v = v & b[i];
            s.insert(v);
        }

        
        
        for(int i = 0; i < n; i++){
            v = v | a[i];
            s.insert(v);
            for(int j = 0; j < m; j++){
                v = v & b[j];
                s.insert(v);
            }
        }
        
        

        for(int i = 0; i < m; i++){
            v = v & b[i];
            s.insert(v);
            for(int j = 0; j < n; j++){
                v = v | a[j];
                s.insert(v);
            }
        }

        

        int i = 0, j =0;

        while(i < n and j < m){
            v = v | a[i];
            i++;
            s.insert(v);
            v = v & b[j];
            s.insert(v);
            j++;
        }

        while(i < n){
            v = v|a[i];
            i++;
            s.insert(v);
        }

        while(j < m){
            v = v|b[j];
            j++;
            s.insert(v);
        }

        v = 0, i = 0, j = 0;

        while(i < m and j < n){
            v = v & b[i];
            i++;
            s.insert(v);
            v = v | a[j];
            s.insert(v);
            j++;
        }

        while(i < m){
            v = v&b[i];
            i++;
            s.insert(v);
        }

        while(j < n){
            v = v|a[j];
            j++;
            s.insert(v);
        }

        
        for(int i: s){
            cout<<i<<" ";
        }
        
        
    }

    return 0;
}
