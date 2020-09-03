#!/bin/bash

passwd corona 
passwd doc1
passwd doc2

for((i=1; i<6; i++)); do
 passwd patient"$i"doc1
 passwd patient"$i"doc2

 00 12 * * * echo "" > /home/patient"$i"doc1/Symptoms/Symptoms.txt
 00 12 * * * echo "" > /home/patient"$i"doc2/Symptoms/Symptoms.txt
done


alias a = "echo " " > /home/doc1/Symptoms/Symptoms.txt"
alias b = "echo " " > /home/doc2/Symptoms/Symptoms.txt"
alias c = " for((i=1; i<6; i++)); do
              echo " " > /home/patient"$i"doc1/Symptoms/Symptoms.txt
              echo " " > /home/patient"$i"doc2/Symptoms/Symptoms.txt
            done"

alias d = "count = ls -1U /home/doc1/Symptoms| wc -l
           if [ $count -gt 20 ]
            do
             userdel -r Symptoms
            done
           fi"            


alias e = "count = ls -1U /home/doc2/Symptoms| wc -l
          if [ $count -gt 20 ]
            do
              userdel -r Symptoms
            done
          fi"           


alias f = " for((i=1; i<6; i++)); do
            count = ls -1U /home/patient"$i"doc1/Symptoms| wc -l

            if [ $count -gt 20 ]
              do
                userdel -r Symptoms
              done
            fi
              done"


alias g = " for((i=1; i<6; i++)); do
            count = ls -1U /home/patient"$i"doc2/Symptoms| wc -l

            if [ $count -gt 20 ]
              do
              userdel -r Symptoms
              done
            fi
            done"


alias h = "echo " " > /home/doc1/Vaccines/Vaccines.txt"
alias i = "echo " " > /home/doc2/Vaccines/Vaccines.txt"


alias j = "echo "x = name  
                y = doctor_name
                z = Symptoms " > /home/patient"$i"doc1/Requests/Requests.txt

          echo "z" > /home/patient"$i"doc1/Symptoms/Symptoms.txt 

          echo "l = name 
                m = doctor_name
                n = Symptoms" > /home/patient"$i"doc2/Requests/Requests.txt

          echo "n" > /home/patient"$i"doc2/Symptoms/Symptoms.txt "




alias k="rm /home/patient"$i"doc1/Symptoms/symptom_"$i".txt
        rm /home/patient"$i"doc2/Symptoms/symptom_"$i".txt"




00 12 * * * echo "" > /home/doc1/Symptoms/Symptoms.txt
00 12 * * * echo "" > /home/doc2/Symptoms/Symptoms.txt


