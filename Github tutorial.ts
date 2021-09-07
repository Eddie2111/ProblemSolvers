ToPushFile{
  //echo "# 24hr-clock-_Circuit-Design_" >> README.md#not important
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M master
  git remote add origin git@github.com:Eddie2111/__Repo Name__.git
  git push -u origin master
}
push_an_existing_repository_from_the_command_line{
  git remote add origin git@github.com:Eddie2111/24hr-clock-_Circuit-Design_.git
  git branch -M main
  git push -u origin main
}

