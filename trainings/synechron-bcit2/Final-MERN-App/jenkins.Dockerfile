# jenkins.Dockerfile
FROM jenkins/jenkins:lts

USER root
RUN apt-get update && \
    apt-get install -y docker.io curl gnupg ca-certificates && \
    curl -fsSLo /usr/local/bin/kubectl \
      https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && \
    chmod +x /usr/local/bin/kubectl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
USER jenkins