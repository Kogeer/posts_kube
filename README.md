This project created for testing purposes.

Requirements:  
- Docker  
- Kubernetes (minikube for Linux users)
- ingress-nginx (NOT kubernetes-ingress): https://kubernetes.github.io/ingress-nginx/deploy/
- Skaffold (skaffold.dev)

After installed the requirements, but before start the project:  
#### Change the /etc/hosts file:
Get minikube IP if use:  
`<minikubeip>` posts.com  

Mac/Win:  
127.0.0.1 posts.com

### Project start  
$project_root: `skaffold dev  `

If you see, query service crashed after start (because can't reach event bus on start), just restart with command:  
`kubectl rollout restart deployment query-depl`

Just stop with CTRL+C.
