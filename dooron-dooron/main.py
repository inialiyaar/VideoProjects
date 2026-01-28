import sys
from subprocess import run
from time import sleep
from colorama import Fore, Style, init

init(autoreset=True)

def playAudio(path):
  run(["termux-media-player", "play", path])

def typeLyrics(text, color, delay=0.1):
  for char in text:
    sys.stdout.write(Style.BRIGHT + color + char)
    sys.stdout.flush()
    sleep(delay)
  print()
  
def main():
  playAudio("song.mp3")
  lyrics = [("ho ohoho..", Fore.YELLOW, 1), ("Sochu ke milni te bolaanga ki", Fore.WHITE, 1.1), ("Teri taan gallaan’ch.. shaayari", Fore.GREEN, 1), ("Vekhegi mainu te sochegi kya tu", Fore.BLUE, 1), ("Mitti da banda main, tu taan pari...", Fore.MAGENTA, 0.6), ("Ishqe di galiyach, khoya e dil ve", Fore.RED, 0.8), ("Aas lagaaye ik jaaye tu mil ve", Fore.BLACK, 0.5), ("Kol tere mainu aan de soni", Fore.CYAN, 1.2), ("karaan main kitne jatan O soni", Fore.YELLOW, 1.2), ("Dooron dooron main", Fore.WHITE, 1.5), ("vekhaan tenu soneyo...", Fore.GREEN, 2), ("Kahaan tuuu", Fore.CYAN, 2), ("Kahaan main…", Fore.BLUE, 2)]
  typeLyrics("Doorn Dooron - Paresh Pahuja", Fore.MAGENTA, 0)
  print("\n\n\n")
  sleep(1.9)
  for line, color, delay in lyrics:
    typeLyrics(line, color)
    sleep(delay)
main()